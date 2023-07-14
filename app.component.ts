import { Component } from '@angular/core';
import { Employee } from './model/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  varTest='Property binding  example with div';
  title = 'angularapp';
  name = 'Supriya';
parentToChind: string="I am coming from Parent";

flowers=[
  {
    img:"https://images.unsplash.com/photo-1562690868-60bbe7293e94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=418&q=80",
    title:'Rose',
    content:'A rose is a plant that is a member of the genus Rosa, which consists of some 100 species of perennial shrubs in the rose family.',
    link:'https://www.britannica.com/plant/rose-plant'
  },
  {
    img:"https://cdn.shopify.com/s/files/1/0579/7924/0580/articles/shutterstock_572847382.jpg?v=1661880700",
  title:'Mogra',
    content:'Jasminum sambac is a small shrub or vine growing up to 1.6 to 9.8 ft) in height. It is widely cultivated for its attractive and sweetly fragrant flowers.',
    link:'https://plantsinformation.com/plants/mogra/'
  },
  {
    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Hibiscus_Brilliant.jpg/800px-Hibiscus_Brilliant.jpg',
    title:'Hibiscus',
    content:'Hibiscus is a genus of flowering plants in the mallow family, Malvaceae.',
    link:'https://en.wikipedia.org/wiki/Hibiscus_rosa-sinensis'
  },
  {
    img:"https://housing.com/news/wp-content/uploads/2022/10/shutterstock_669619393-300x200-compressed.jpg",
  title:'Lotus',
    content:' The lotus tree, known to the Romans as the Libyan lotus, was probably Celtis australis, the nettle tree of southern Europe, a member of the elm family',
    link:'https://www.britannica.com/plant/lotus-plant-common-name'
  }
];

  empCount ;
  ename;
  age;
  dept;
  salary;


 


  constructor(){
    this.getValueFromServer();
  }
  getValueFromServer(){ this.empCount=10000; }

 data={
  name:'Codemind',
  dept:'IT'
 }

 currentTime(): any
 {
  const date = new Date();
 return date;
 
 }
 

imageUrl='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg';





  save(): void
  {
    alert('this method called')
  }

  testNew(){
    alert('Event Raised');
  }

  onParent(val:Employee)
  {
    console.log("From child to parent", val);
  }

  
parentFunction(data)
{
 
  console.log(data);
  this.ename=data.ename;
  this.age=data.age;
  this.dept=data.dept;
  this.salary=data.salary;
}
clear(data)
{
  this.ename=" ";
  this.age=" ";
  this.dept=" ";
  this.salary=" ";
}

}