import _ from 'lodash';
import React from 'react';
import { Theme, createStyles, FormGroup, Select, MenuItem } from '@material-ui/core';
import { Chip } from '@material-ui/core';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import MaterialTable, { Query, Column } from 'material-table';
import { getAll, addItem, updateItem, deleteItem } from './service';
import { Genre, Impresario, Genres } from '../models';

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

class ImpresariosComponent extends React.Component<WithStyles<typeof styles> | any, State, any> {
  
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
        title: 'ПІБ', 
        field: 'name', 
        emptyValue: '', 
        editable: 'always' as const, 
        defaultSort: 'asc' as const, 
        hidden: false,
        filtering: false,
      },
      {
        title: 'Жанри',
        field: 'genres',
        editable: 'always' as const,
        hidden: false,
        filtering: true,
        lookup: _.zipObject(Genres, Genres),
        render: (rowData: Impresario) => rowData.genres.map(key => <Chip label={key} key={key} className={this.props.classes.chips} />),
        editComponent: (props: any) => (<><FormGroup row>
          {props.value && props.value.map((key: string) =>
            <Chip label={key} key={key} className={this.props.classes.chips} 
              onDelete={() => props.onChange(_.remove(props.value, (i: string) => i !== key))}
          />)}</FormGroup>
          <Select value=""
            onChange={(event) => { 
              if (!_.includes(props.value, event.target.value)) {
                props.onChange(_.concat(props.value || [], event.target.value));
              }
            }}>
            {Genres.map((key: any) => <MenuItem value={key} key={key}>{key}</MenuItem>)}
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
          title={"Імпресаріо"}
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

export const Impresarios = withStyles(styles)(ImpresariosComponent);