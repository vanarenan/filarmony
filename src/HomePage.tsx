import React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      padding: 20,
      margin: '0 auto',
      maxWidth: 600,
      alignSelf: 'center'
    },
  });

class Home extends React.Component<WithStyles<typeof styles> | any, any> {

  render() {
    const { classes } = this.props;
    return (
      <div style={{margin: 30}}>
        <Paper elevation={12} className={classes.root}>
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="panel panel-default">
              <div className="panel-body">
                <h4 style={{textAlign: 'center', fontWeight: 'bold', fontSize: 14}}>
                  Міністерство освіти і науки України<br />
                  Чернівецький національний університет імені Юрія Федьковича<br />
                </h4>
  
                <p style={{textAlign: 'center', textDecoration: 'underline', marginBottom: -27, fontSize: 14}}>
                  &emsp;&emsp;Програмного забезпечення комп’ютерних систем&emsp;&emsp;
                </p>
                <br />
                <p style={{textAlign: 'center', fontWeight: 'normal', fontSize: 10}}>
                (повна назва кафедри, циклової комісії)<br />
                </p>
  
                <h2 style={{textAlign: 'center'}}> КУРСОВИЙ ПРОЕКТ</h2>
  
                <p style={{textAlign: 'center', textDecoration: 'underline', marginBottom: -27, fontSize: 14}}>
                  &emsp;&emsp;&emsp;&emsp;з Баз даних&emsp;&emsp;&emsp;&emsp;
                </p>
                <br />
                <p style={{textAlign: 'center', fontWeight: 'normal', fontSize: 10}}>
                  (назва дисципліни)
                </p>
  
                <p style={{textAlign: 'center', fontWeight: 'normal', fontSize: 14}}>
                  на тему: <span style={{textDecoration: 'underline', fontWeight: 'bold'}}>
                  &emsp;Інформаційна система міської філармонії&emsp;</span>
                  <br />
                </p>
                <p style={{textAlign: 'center', fontSize: 12, marginLeft: 200, marginBottom: -15}}>
                  Виконав: студент(ка)
                  <span style={{textDecoration: 'underline'}}>&emsp;2&emsp;</span>
                    курсу, групи
                  <span style={{textDecoration: 'underline'}}>&emsp;243&emsp;</span><br />
                  спеціальності
                  <span style={{textDecoration: 'underline'}}>&ensp;&emsp;&emsp;6.121&emsp;
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span><br />
                </p>
                <p style={{fontSize: 12, marginLeft: 200, marginBottom: -15}}>
                  <span style={{fontSize: 10, lineHeight: 4}}>(шифр спеціальності)</span><br />
                  <span style={{textDecoration: 'underline'}}>
                    &ensp;&emsp;Інженерія програмного забезпечення&emsp;&emsp;&emsp;</span><br />
                </p>
                <p style={{textAlign: 'center', fontSize: 12, marginLeft: 200, marginBottom: -15}}>
                  <span style={{fontSize: 10, lineHeight: 4}}>(назва спеціальності)</span><br />
                  <span style={{textDecoration: 'underline'}}>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&emsp;</span>
                  &emsp;&emsp;
                  <span style={{textDecoration: 'underline'}}>&emsp;&emsp;&emsp;Ботезат О. В.&emsp;&emsp;&emsp;</span><br />
                </p>
                <p style={{textAlign: 'center', fontSize: 12, marginLeft: 200, marginBottom: -15}}>
                  <span style={{fontSize: 10, lineHeight: 4}}>(підпис)</span>
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <span style={{fontSize: 10, lineHeight: 4}}>(прізвище, ініціали)</span><br />
                  Керівник&emsp;&emsp;&emsp;&emsp;&emsp;
                  <span style={{textDecoration: 'underline'}}>&emsp;&emsp;&emsp; Прохоров Г. В.&emsp;&emsp;&emsp;</span><br />
                </p>
                <p style={{textAlign: 'center', fontSize: 12, marginLeft: 200, marginBottom: -15}}>
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <span style={{fontSize: 10, lineHeight: 4}}>(прізвище, ініціали)</span><br />
                  Нормоконтролер&emsp;
                  <span style={{textDecoration: 'underline'}}>&emsp;&emsp;&emsp; Комісарчук В.В.&emsp;&emsp;&emsp;</span><br />
                </p>
                <p style={{textAlign: 'center', fontSize: 12, marginLeft: 200, marginBottom: -15}}>
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <span style={{fontSize: 10, lineHeight: 4}}>(прізвище, ініціали)</span><br />
                </p><br />
                <div style={{display: 'inline-flex', alignItems: 'flex-end'}}>
                  <table style={{textAlign: 'center'}}>
                    <tbody>
                      <tr style={{fontSize: 12}}>
                        <td>
                          <span style={{fontWeight: 'bold'}}>До захисту допущено:</span><br />
                          від «_____»______________ 20____р.<br />
                          Керівник&emsp;&emsp;&emsp;__________________<br />
                          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(підпис)&emsp;&emsp;<br />
                          Нормоконтролер  _________________<br />
                          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(підпис)&emsp;&emsp;<br />
                          <br /><br />
                        </td>
                        <td>
                          &emsp;<span style={{fontWeight: 'bold'}}>Дата захисту</span> «______»_____________ 20____р.<br />
                          &emsp;<span style={{fontWeight: 'bold'}}>Оцінка:</span><br />
                          &emsp;за національною шкалою ___________________<br />
                          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(словами)<br />
                          &emsp;кількість балів&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;___________________<br />
                          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(цифра)<br />
                          &emsp;за шкалою ECTS&emsp;&emsp;&emsp;&ensp;&nbsp;___________________<br />
                          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(літера)<br />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br />
                <p style={{fontSize: 12}}>Чернівці–2019</p>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export const HomePage = withStyles(styles)(Home);