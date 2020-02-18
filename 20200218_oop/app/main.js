const admin = {
    name: 'admin',
    info : function(){
        console.log(this.name);
    }
};

const user = {
    name : 'user'
}

admin.info();
admin.info.apply(user);