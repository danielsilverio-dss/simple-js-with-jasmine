const Person = function(age){

    if(age < 0)
        throw new Error("Invalid age!")

    let _age = age;

    let setAge = function(age){
        _age = age;
    }

    let getAge = function(){
        return _age;
    }

    let getOlder = function(){
        const newAge = getAge() + 1;
        setAge( newAge );
    }

    return {
        getAge: getAge,
        setAge: setAge,
        getOlder: getOlder
    }

}