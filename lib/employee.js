class employee {
    constructer(name,id,email,officenumber,github,school,title){
        this.name= name;
        this.email= email;
        this.id= id;
        this.officenumber= officenumber;
        this.github = github;
        this.school = school; 
        this.title = 'employee';
    }
    getName() {
        return this.name;
      }
    
      getId() {
        return this.id;
      }
    
      getEmail() {
        return this.email;
      }
      getofficenumber() {
          return this.officenumber
      }
      gettitle() {
        return this.title;
      }
      getgithub() {
        return this.github
    }
    getschool() {
      return this.school;
    }
}
module.exports = employee;