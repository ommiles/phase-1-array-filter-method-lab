/* The findMatching function takes 2 arguments: an array named drivers and a string representing a driver's name.  When invoked, findMatching returns a filtered drivers array.  The conditions for the filtered array lie in the 'driver' callback function: if the value coerces to true by means of the strict equality operator, the value is returned and stored, if the value coerces to false, it is discarded. */

const findMatching = (drivers, driversName) =>
    drivers.filter(driver => 
        driver.toLowerCase() === driversName.toLowerCase()
    )

/* This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters. NOTE: The startsWith method is case sensitive. */

const fuzzyMatch = (drivers, nameString) => {
    return drivers.filter(driverName => driverName.slice(0, nameString.length) === nameString)
}

/* This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument. */

const matchName = (drivers, string) => {
    return drivers.filter(driverName => driverName.name === string)
}