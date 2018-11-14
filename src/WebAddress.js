import React from 'react';
import AutoComplete from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const dataSource1 = [
  {
    text: 'text-value1',
    value: (
      <MenuItem
        primaryText="text-value1"
        secondaryText="&#9786;"
      />
    ),
  },
  {
    text: 'text-value2',
    value: (
      <MenuItem
        primaryText="text-value2"
        secondaryText="&#9786;"
      />
    ),
  },
];

const dataSource2 = [
  'facebook.com',
  'wikileaks.ch',
  'youtube.com',
  'twitter.com',
  'google.com',
  'gmail.com',
  'cnn.com',
  'wikipedia.org',
  'dropbox.com',
  'yahoo.com',
];

const dataSource3 = [
  {textKey: 'Some Text', valueKey: 'someFirstValue'},
  {textKey: 'Some Text', valueKey: 'someSecondValue'},
];
const dataSourceConfig = {
  text: 'textKey',
  value: 'valueKey',
};

/**
 * The first example has `MenuItem`s in its data source that display on data entry.
 * The second example uses an array of values as its `dataSource`, and updates on focus.
 * Both examples have filtering disabled.
 */
const WebAddress = () => (
  <div>
    <TextField
      floatingLabelText="Key in web address here"
      filter={AutoComplete.noFilter}
      openOnFocus={true}
      dataSource={dataSource2}
    /><br />
    <Typography variant="h3" gutterBottom>
        Is website.com accessible?
    </Typography>
    <Typography variant="h4" gutterBottom>
      Yes, website.com is accessible
    </Typography>
  </div>
);

export default WebAddress;