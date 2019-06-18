import _ from 'lodash';
import React from 'react';
import { Theme, createStyles } from '@material-ui/core';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import MaterialTable, { Query, Column } from 'material-table';
import { getAll, addItem, updateItem, deleteItem } from './service';
import { Place } from '../models';

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

class PlacesComponent extends React.Component<WithStyles<typeof styles> | any, State, any> {
  
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
        title: 'Назва', 
        field: 'name', 
        emptyValue: '', 
        editable: 'always' as const, 
        defaultSort: 'asc' as const, 
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
        title: 'Місць', 
        field: 'seats', 
        emptyValue: '', 
        editable: 'always' as const, 
        hidden: false,
        type: 'numeric' as const,
      },

    ],
  };
  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <MaterialTable
          title={"Споруди"}
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
            paging: false,
            search: true,
            filtering: true,
          }}
        />
      </div>
    );
  };
}

export const Places = withStyles(styles)(PlacesComponent);