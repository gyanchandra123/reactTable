import {format} from 'date-fns'

export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date_of_birth",
    Cell: ({ value }) => {  // it transform the raw values of column
      return format(new Date(value), 'dd/MM/yyyy')
    }
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
  },
];

// grouping columns:
export const GROUPED_COLUMNS = [
    {                          // for id
      Header: 'Id',
      Footer: 'Id',
      accessor: 'id'
    },

    {                        // for name group
      Header: 'Name',
      Footer: 'Name',
      columns: [
        {
          Header: 'First Name',
          Footer: 'First Name',
          accessor: 'first_name'
        },
        {
          Header: 'Last Name',
          Footer: 'Last Name',
          accessor: 'last_name'
        }
      ]
    },

    {                       // for info group.
      Header: 'Info',
      Footer: 'Info',
      columns: [
        {
          Header: 'Date of Birth',
          Footer: 'Date of Birth',
          accessor: 'date_of_birth'
        },
        {
          Header: 'Country',
          Footer: 'Country',
          accessor: 'country'
        },
        {
          Header: 'Phone',
          Footer: 'Phone',
          accessor: 'phone'
        }
      ]
    }
  ]