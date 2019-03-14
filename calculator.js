var calculator = {
    dif: function(){
        return this.a - this.b;
    },
    div: function(){
        return this.a / this.b;
    },
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
  alert( "Разность = " + calculator.dif() );
  alert( "Произведение = " + calculator.mul() );
  alert( "Деление = " + calculator.div() );
  alert(
    "Сумма = " + calculator.sum() + 
    "\nРазность = " + calculator.dif() +
    "\nПроизведение = " + calculator.mul() +
    "\nДеление = " + calculator.div()
  );