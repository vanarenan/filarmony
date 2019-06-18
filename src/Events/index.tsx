import _ from 'lodash';
import React from 'react';
import { Theme, createStyles, FormGroup, Select, MenuItem, Input } from '@material-ui/core';
import { Chip } from '@material-ui/core';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import MaterialTable, { Query, Column } from 'material-table';
import { getAll, addItem, updateItem, deleteItem } from './service';
import { Genre, Genres, Event, Impresario, Place, Actor } from '../models';
import { getImpresario, getAllImpresarios } from '../Impresarios/service';
import { getActor, getAllActors } from '../Actors/service';
import { getPlace, getAllPlaces } from '../Places/service';

const styles = (theme: Theme) => createStyles({
  root: {
    margin: theme.spacing(3),
  },
  chips: {
    margin: theme.spacing(0.25),
  },
});

type State = {
  columns: Column[];
};

class EventsComponent extends React.Component<WithStyles<typeof styles> | any, State, any> {
  
  state = {
    columns: [
      { 
        title: 'ID', 
        field: 'id', 
        emptyValue: '',
        editable: 'never' as const, 
        hidden: true,
        filtering: false,
      },
      { 
        title: 'Дата', 
        field: 'date',
        emptyValue: '', 
        editable: 'always' as const, 
        defaultSort: 'asc' as const, 
        hidden: false,
        filtering: false,
        render: (rowData: Event) => ((new Date(Date.parse(rowData.date))).toLocaleDateString()),
        editComponent: (props: any) => (<Input type={"date"} value={props.value}
          onChange={(event) => { props.onChange(event.target.value); }}/>),
      },
      { 
        title: 'Назва', 
        field: 'name', 
        emptyValue: '', 
        editable: 'always' as const, 
        hidden: false,
        filtering: false,
      },
      { 
        title: 'Опис', 
        field: 'desc', 
        emptyValue: '', 
        editable: 'always' as const, 
        hidden: false,
        filtering: false,
      },
      {
        title: 'Споруда',
        field: 'placeId',
        editable: 'always' as const,
        hidden: false,
        filtering: false,
        render: (rowData: Event) => (getPlace(rowData.placeId).name + ' (' + getPlace(rowData.placeId).desc + '), місць: ' + getPlace(rowData.placeId).seats),
        editComponent: (props: any) => (<Select value={props.value}
          onChange={(event) => { props.onChange(event.target.value); }}>
          {getAllPlaces().map((key: any) => <MenuItem value={key.id} key={key.id}>{key.name + ' (' + key.desc + '), місць: ' + key.seats}</MenuItem>)}
        </Select>),
      },
      {
        title: 'Імпресаріо',
        field: 'impresarioId',
        editable: 'always' as const,
        hidden: false,
        filtering: false,
        render: (rowData: Event) => (getImpresario(rowData.impresarioId).name + ' (' + getImpresario(rowData.impresarioId).genres.join(', ') + ')'),
        editComponent: (props: any) => (<Select value={props.value}
          onChange={(event) => { props.onChange(event.target.value); }}>
          {getAllImpresarios().map((key: any) => <MenuItem value={key.id} key={key.id}>{key.name + ' (' + key.genres.join(', ') + ')'}</MenuItem>)}
        </Select>),
      },
      {
        title: 'Актори',
        field: 'actorsId',
        editable: 'always' as const,
        hidden: false,
        filtering: false,
        render: (rowData: Event) => rowData.actorsId.map(id => {
          const key: Actor = getActor(id);
          return (<Chip label={key.name + ' (' + key.genres.join(', ') + ')'} key={key.id} className={this.props.classes.chips} />);
        }),
        editComponent: (props: any) => (<><FormGroup row>
          {props.value && props.value.map((id: string) => {
            const key: Actor = getActor(id);
            return (<Chip label={key.name + ' (' + key.genres.join(', ') + ')'} key={key.id} className={this.props.classes.chips} 
              onDelete={() => props.onChange(_.remove(props.value, (i: string) => i !== key.id))}
          />)})}</FormGroup>
          <Select value=""
            onChange={(event) => { 
              if (!_.includes(props.value, event.target.value)) {
                props.onChange(_.concat(props.value || [], event.target.value));
              }
            }}>
            {getAllActors().map((key: any) => <MenuItem value={key.id} key={key.id}>{key.name + ' (' + key.genres.join(', ') + ')'}</MenuItem>)}
          </Select>
        </>),
      },
    ],
  };
  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <MaterialTable
          title={"Заходи"}
          columns={this.state.columns}
          data={getAll}
          editable={{
            onRowAdd: addItem,
            onRowUpdate: updateItem,
            onRowDelete: deleteItem,
          }}
          options={{ 
            columnsButton: true,
            addRowPosition: 'first',
//            pageSize: 10,
//            pageSizeOptions: [5, 10, 20, 50],
            paging: false,
            search: true,
            filtering: true,
          }}
        />
      </div>
    );
  };
}

export const Events = withStyles(styles)(EventsComponent);