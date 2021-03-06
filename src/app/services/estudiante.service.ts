import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Estudiante } from '../models/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  constructor(private firestore:AngularFirestore) {     
  }
  createStudent(student: Estudiante){
    return this.firestore.collection("estudiante").add(student);
  }
}
