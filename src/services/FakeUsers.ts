const database = [ 
    ['0','avatar1.png','name1','surname','14'],
    ['1','avatar2.png','name2','surname','14'], 
    ['2','avatar3.png','name3','surname','14'], 
    ['3','avatar4.png','name4','surname','14'], 
    ['4','avatar5.png','name5','surname','14'], 
    ['5','avatar6.png','name6','surname','14'], 
    ['6','avatar7.png','name7','surname','14'] 
];

export class UserService {

    public list() {
        return database;
    }
}

export default database;
