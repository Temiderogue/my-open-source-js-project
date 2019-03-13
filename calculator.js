var calculator = {
    mul: function(){
        return this.a * this.b;
    },
    sum: function(){
        return this.a + this.b;
    },

    read: function(){
        this.a = +prompt('Введите a', 0);
        this.b = +prompt('Введите b', 0);
    }
  }
  
  calculator.read();
  alert( "Сумма = " + calculator.sum() );
  alert( "Произведение = " + calculator.mul() );