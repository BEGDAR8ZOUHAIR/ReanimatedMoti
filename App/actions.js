// Get all Quotes
export const getQuotes = (quotes) => ({
    type: 'GET_QUOTES',
    data: { quotes }
})

// Add Quote
export const addQuote = (quote) => ({
    type: 'ADD_QUOTE',
    data: {quote}
})

// Apdate Quote 
export const ApdateQuote = (quote) => ({
    type: 'APDATE_QUOTE',
    date: { quote }
})

// Delete Quote
export const deleteQuote = (id) => ({
    type: 'DELETE_QUOTE',
    data: {id}
})


export const GET_QUOTES = 'GET_QUOTES';
export const ADD_QUOTE = 'ADD_QUOTE';
export const APDATE_QUOTE = 'APDATE_QUOTE';
export const DELETE_QUOTE = 'DELETE_QUOTE';

