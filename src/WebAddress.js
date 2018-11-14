import React from 'react';
import AutoComplete from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

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

const styles = theme => ({
  webAddress: {
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5,
    paddingLeft: theme.spacing.unit * 5,
    paddingRight: theme.spacing.unit * 5,
  },
});

/**
 * The first example has `MenuItem`s in its data source that display on data entry.
 * The second example uses an array of values as its `dataSource`, and updates on focus.
 * Both examples have filtering disabled.
 */
function WebAddress(props) {
  const { classes } = props;

  return (
  <div class={classes.webAddress}>
    <TextField
      floatingLabelText="Key in web address here"
      filter={AutoComplete.noFilter}
      openOnFocus={true}
      dataSource={dataSource2}
    /><br />
    <br />
    <br />
    <br />
    <br />
    <Typography variant="h3" gutterBottom>
        Is website.com accessible?
    </Typography>
    <Typography variant="h4" gutterBottom>
      Yes, website.com is accessible
    </Typography>
  </div>
  )
};

WebAddress.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WebAddress);
