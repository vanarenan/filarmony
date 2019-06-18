import 'bootstrap/dist/css/bootstrap.css';
import 'react-notifications/lib/notifications.css';

import React from 'react';
import { render } from 'react-dom';

import { App } from './App';

import { Init_Impresarios, Init_Actors, Init_Places, Init_Events } from './data';

if (!localStorage.getItem('impresarios')) localStorage.setItem('impresarios', JSON.stringify(Init_Impresarios));
if (!localStorage.getItem('actors')) localStorage.setItem('actors', JSON.stringify(Init_Actors));
if (!localStorage.getItem('places')) localStorage.setItem('places', JSON.stringify(Init_Places));
if (!localStorage.getItem('events')) localStorage.setItem('events', JSON.stringify(Init_Events));

render(<App />, document.getElementById('root'));