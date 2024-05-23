function storeCarInfo(manufacturer, modelName, ...extraOption) {
    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    };
    return carInfo;
}
;
let answare = storeCarInfo('Honda', 'Civic', { color: 'black' }, { features: ['Navigation', 'Power window'] });
console.log(answare);
export {};
