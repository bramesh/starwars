import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import Autosuggest from 'react-autosuggest';

import './css/Search.css';

const families = [
  {
    school: "Coleytown Elementary School",
    familyName: "Aggarwal",
    homePhone: "203-425-9567",
    address: {
      street: "6 Garden Ln",
      city: "Westport",
      state: "CT",
      zip: "06880"
    },
    members: [
      {
        first: "Komal",
        last: "Vora",
        email: "kvora@compuchild.com",
        phone: "203-921-7905",
        type: "parent",
        related: true
      },
      {
        first: "Neeraj",
        last: "Aggarwal",
        email: "aggarwne@yahoo.com",
        phone: "203-921-7906",
        type: "parent"
      },
      {
        first: "Suhani",
        last: "Aggarwal",
        class: "5",
        type: "student"
      }
    ]
  },
  {
    school: "Coleytown Elementary School",
    familyName: "ABRAMS",
    homePhone: "203-425-9567",
    address: {
      street: "6 Garden Ln",
      city: "Westport",
      state: "CT",
      zip: "06880"
    },
    members: [
      {
        first: "Lauren",
        last: "Abrams",
        email: "kvora@compuchild.com",
        phone: "203-921-7905",
        type: "parent"
      },
      {
        first: "Evan",
        last: "Abrams",
        email: "aggarwne@yahoo.com",
        phone: "203-921-7906",
        type: "parent"
      },
      {
        first: "Shea",
        last: "Abram",
        class: "5",
        type: "student"
      }
    ]
  }
]

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  const firstName = families
    .map(section => {
      return {
        title: section.title,
        members: section.members.filter(
          member => {
            return regex.test(member.first)
          }
        )
      };
    })
    .filter(section => section.members.length > 0);

    const lastName = families
    .map(section => {
      return {
        title: section.title,
        members: section.members.filter(
          member => {
            return regex.test(member.last)
          }
        )
      };
    })
    .filter(section => section.members.length > 0);



  if (firstName.length) {
    return firstName
  } else if (lastName.length) {
    return lastName;
  } else {
    return [];
  }
}



function getSuggestionValue(suggestion) {
  return `${suggestion.first} ${suggestion.last}`;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.first} {suggestion.last}</span>
  );
}

function renderSectionTitle(section) {
  return (
    <strong>{section.type}</strong>
  );
}

function getSectionSuggestions(section) {
  return section.members;
}

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search Families",
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        multiSection={true}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        getSectionSuggestions={getSectionSuggestions}
        renderSectionTitle={renderSectionTitle}
        inputProps={inputProps} />
    );
  }
}

export default Search;
