interface FilterSearchProps {
    router: any;
    query: any
}

export const filterSearch = ({router,query}: FilterSearchProps) => {
    router.push({
        pathname: router.pathname,
        query: {
            ...router.query,
            ...query
        }
    })
}