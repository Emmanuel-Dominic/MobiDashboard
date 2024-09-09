import { Component } from '@angular/core';

interface InfiniteScrollEvent {
  target: {
    complete: () => void;
  };
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  studentList = students;
  constructor() {}

  loadMoreOnScroll(event: InfiniteScrollEvent) {
    setTimeout(() => {
      let newStudents = [...this.studentList];
      newStudents.reverse();

      this.studentList = this.studentList.concat(newStudents);

      event.target.complete();
    }, 3000);
  }
}

const students = [
  {
    id: 1,
    name: "Emmanuel"
  },
  {
    id: 2,
    name: "Dominic"
  },
  {
    id: 3,
    name: "Matembu"
  },
  {
    id: 4,
    name: "Shalom"
  },
  {
    id: 5,
    name: "Darren"
  },
  {
    id: 6,
    name: "Makeila"
  },
  {
    id: 7,
    name: "Pamela"
  },
  {
    id: 8,
    name: "Yivan"
  },
  {
    id: 9,
    name: "Akiliboss"
  },
  {
    id: 10,
    name: "Mutoni"
  },
  {
    id: 11,
    name: "Kirabo"
  },
  {
    id: 12,
    name: "Evelyn"
  }
]
