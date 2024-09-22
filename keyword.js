// this keyword

const student = {
    name: 'Sudhanshu',
    age: 24,
    eng: 95,
    math: 90,
    phy: 80,
    getAvg(){
         let avg = (this.eng+this.math+this.phy)/3
         console.log(avg);
    }
}