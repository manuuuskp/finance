interface Where {
    columnName: string,
    operator: WhereFilterOp,
    value: any
}

export default Where;


export declare type WhereFilterOp = '<' | '<=' | '==' | '!=' | '>=' | '>' | 'array-contains' | 'in' | 'array-contains-any' | 'not-in';