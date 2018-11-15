import React from 'react';
import './WebAddress.css';
import TextField from '@material-ui/core/TextField';
import deburr from 'lodash/deburr';
import keycode from 'keycode';
import Downshift from 'downshift';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const suggestions = [
  { label: 'facebook.com' },
  { label: 'wikileaks.ch' },
  { label: 'twitter.com' },
  { label: 'youtube.com' },
  { label: 'google.com' },
  { label: 'gmail.com' },
  { label: 'cnn.com' },
  { label: 'wikipedia.org' },
  { label: 'dropbox.com' },
  { label: 'yahoo.com' },
];

function renderInput(inputProps) {
  const { InputProps, defaultDomain, classes, ref, ...other } = inputProps;

  return (
    <TextField
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
          input: classes.inputInput,
        },
        ...InputProps,
      }}
      {...other}
      variant="outlined"
      defaultValue={defaultDomain}
    />
  );
}

function renderSuggestion({ suggestion, index, itemProps, highlightedIndex, selectedItem }) {
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
    >
      {suggestion.label}
    </MenuItem>
  );
}
renderSuggestion.propTypes = {
  highlightedIndex: PropTypes.number,
  index: PropTypes.number,
  itemProps: PropTypes.object,
  selectedItem: PropTypes.string,
  suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired,
};

function getSuggestions(value) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 250,
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5,
    paddingLeft: theme.spacing.unit * 5,
    paddingRight: theme.spacing.unit * 5,
  },
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  inputRoot: {
    flexWrap: 'wrap',
    variant: 'outlined',
  },
  inputInput: {
    width: 'auto',
    flexGrow: 1,
  },
  divider: {
    height: theme.spacing.unit * 2,
  },
});

class WebAddress extends React.Component {
  state = {
    domain: 'yahoo.com',
    accessible: true,
    stateText: {
      true: 'is accessible',
      false: 'is not accessible',
    }
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;
    return (
      <div className={classes.root}>
        <Downshift
        id="downshift-simple"
        onChange={selection => this.setState({domain: selection, accessible: false})}
        >
          {({
            getInputProps,
            getItemProps,
            getMenuProps,
            highlightedIndex,
            inputValue,
            isOpen,
            selectedItem,
          }) => (
            <div className={classes.container}>
              {renderInput({
                fullWidth: true,
                defaultDomain: this.state.domain,
                classes,
                InputProps: getInputProps({
                  placeholder: 'Check a website or URL',
                }),
              })}
              <div {...getMenuProps()}>
                {isOpen ? (
                  <Paper className={classes.paper} square>
                    {getSuggestions(inputValue).map((suggestion, index) => 
                      renderSuggestion({
                        suggestion,
                        index,
                        itemProps: getItemProps({ item: suggestion.label }),
                        highlightedIndex,
                        selectedItem,
                      }),
                    )}
                  </Paper>
                ) : null}
              </div>
            </div>
          )}
        </Downshift>
        <div className={classes.divider} />
        <div className={classes.divider} />
        <br />
        <br />
        <br />
        <br />
        <Typography variant="h3" gutterBottom>
            Is {this.state.domain} accessible?
        </Typography>
        <Typography variant="h4" gutterBottom>
        { this.state.accessible ? 'Yes' : 'No' }&nbsp;
        <u><b>{this.state.domain}</b></u>&nbsp;
          <span className={ this.state.accessible ? 'Accessible-yes' : 'Accessible-no' }>
            {this.state.stateText[this.state.accessible]}
          </span> .
        </Typography>
      </div>
    );
  }
};

WebAddress.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WebAddress);
