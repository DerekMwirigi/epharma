export const OrderHelpers = {
    searchCodeValidator: (searchCode) => {
        if (!searchCode) {
            return "Search code can't be empty.";
        }
        return '';
    }
}