import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { UserComponent } from './user/user.component';
import { Book } from './book/Book';
import { BookAssignment } from './book/BookAssignment';
import { EventData } from './upcoming-news/EventData';

@Injectable({
  providedIn: 'root'
})
export class InsertService {

  constructor(private http: HttpClient) { }


  ADMIN_INSERT = "http://localhost:8081/api/v1/admin/insert"
  ADMIN_LOGIN = "http://localhost:8081/api/v1/admin/login"
  ADMIN_VIEW = "http://localhost:8081/api/v1/admin/view"
  ADMIN_ALL = "http://localhost:8081/api/v1/admin/viewall"
  ADMIN_UPDATE = "http://localhost:8081/api/v1/admin/update"
  ADMIN_DELETE = "http://localhost:8081/api/v1/admin/delete"
  ADMIN_FORGOT ="http://localhost:8081/api/v1/admin/forgot-password"

  url1 = "http://localhost:8081/addstudent"
  url2 = "http://localhost:8081/loginstudent"
  url3 = "http://localhost:8081/viewstudent"
  url11 = "http://localhost:8081/updatestudent"
  url12 = "http://localhost:8081/deletestudent"

  url15 = "http://localhost:8081/addeestudent"
  url16 = "http://localhost:8081/logineestudent"
  url17 = "http://localhost:8081/vieweestudent"
  url18 = "http://localhost:8081/updateeestudent"
  url19 = "http://localhost:8081/deleteeestudent"

  url20 = "http://localhost:8081/addcestudent"
  url21 = "http://localhost:8081/logincestudent"
  url22 = "http://localhost:8081/viewcestudent"
  url23 = "http://localhost:8081/updatecestudent"
  url24 = "http://localhost:8081/deletecestudent"

  url8 = "http://localhost:8081/addmefaculty"
  url9 = "http://localhost:8081/loginmefaculty"
  url10 = "http://localhost:8081/viewmefaculty"
  url13 = "http://localhost:8081/updatemefaculty"
  url14 = "http://localhost:8081/deletemefaculty"

  url25 = "http://localhost:8081/addeefaculty"
  url26 = "http://localhost:8081/logineefaculty"
  url27 = "http://localhost:8081/vieweefaculty"
  url28 = "http://localhost:8081/updateeefaculty"
  url29 = "http://localhost:8081/deleteeefaculty"

  url30 = "http://localhost:8081/addcefaculty"
  url31 = "http://localhost:8081/logincefaculty"
  url32 = "http://localhost:8081/viewcefaculty"
  url33 = "http://localhost:8081/updatecefaculty"
  url34 = "http://localhost:8081/deletecefaculty"

  url35 = "http://localhost:8081/addstaff"
  url36 = "http://localhost:8081/loginstaff"
  url37 = "http://localhost:8081/viewstaff"
  url38 = "http://localhost:8081/updatestaff"
  url39 = "http://localhost:8081/deletestaff"


  url40 = "http://localhost:8081/addbranch"
  url41 = "http://localhost:8081/viewbranch"
  url42 = "http://localhost:8081/deletebranch"


  url43 = "http://localhost:8081/addnotify"
  url44 = "http://localhost:8081/viewnotify"
  url45 = "http://localhost:8081/deletenotify"


  url46 = "http://localhost:8081/addmemarksheet"
  url47 = "http://localhost:8081/viewmemarksheet"
  url48 = "http://localhost:8081/deletememarksheet"
  url49 = "http://localhost:8081/updatememarksheet"

  url50 = "http://localhost:8081/addfees"
  url51 = "http://localhost:8081/viewfees"

  private apiUrl = 'http://localhost:8081/api/v1/books';

  private apiUrl2 = 'http://localhost:8081/api/v1/books/assignments';

  private eventsUrl = 'http://localhost:8081/api/v1/events';


  getAllEvents(): Observable<EventData[]> {
    return this.http.get<EventData[]>(this.eventsUrl);
  }

  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.eventsUrl, event);
  }

  deleteEvent(eventId: number): Observable<void> {
    return this.http.delete<void>(`${this.eventsUrl}/${eventId}`);
  }


  loginservice2(data3: any) {
    return this.http.post(this.ADMIN_LOGIN, data3);
  }

  public loginAdminFromRemote(admin: UserComponent): Observable<object> {
    console.log(admin);
    return this.http.post(this.ADMIN_LOGIN, admin);

  }

  addAdmin(data: any) {
    return this.http.post(this.ADMIN_INSERT, data);
  }

  viewAllAdmin() {
    return this.http.get(this.ADMIN_ALL);
  }

  updateAdmin(value: any) {
    return this.http.post(this.ADMIN_UPDATE, value);
  }
  forgotPassword(email: string, password: string): Observable<string> {
    const body = { email, password };
    return this.http.post<string>(this.ADMIN_FORGOT, body);
  }
  deleteAdmin(data: any) {
    return this.http.post(this.ADMIN_DELETE, data);
  }

  addStudent(data: any) {
    return this.http.post(this.url1, data);
  }
  viewStudent() {
    return this.http.get(this.url3);
  }
  updateStudent(value: any) {
    return this.http.post(this.url11, value);
  }
  deleteStudent(data: any) {
    return this.http.post(this.url12, data);
  }


  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book);
  }

  updateBook(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/${id}`, book);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getAllBookAssignments(): Observable<BookAssignment[]> {
    return this.http.get<BookAssignment[]>(this.apiUrl2);
  }

  saveBookAssignment(bookAssignment: BookAssignment): Observable<BookAssignment> {
    return this.http.post<BookAssignment>(this.apiUrl2, bookAssignment);
  }

  deleteBookAssignment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl2}/${id}`);
  }

  assignBookToStudent(studentId: number, bookId: number): Observable<void> {
    const assignUrl = `${this.apiUrl2}/assign/${studentId}/${bookId}`;
    return this.http.post<void>(assignUrl, {});
  }


  loginservice1(data2: any) {
    return this.http.post(this.url2, data2);
  }

  public loginUserFromRemote(user: UserComponent): Observable<object> {
    console.log("In the loginUserFromRemote")
    console.log(user);
    return this.http.post(this.url2, user);

  }


  addEEStudent(data: any) {
    return this.http.post(this.url15, data);
  }
  viewEEStudent() {
    return this.http.get(this.url17);
  }
  updateEEStudent(value: any) {
    return this.http.post(this.url18, value);
  }
  deleteEEStudent(data: any) {
    return this.http.post(this.url19, data);
  }

  loginservice1EE(data2: any) {
    return this.http.post(this.url16, data2);
  }

  public loginUserFromRemoteEE(user: UserComponent): Observable<object> {
    console.log(user);
    return this.http.post(this.url16, user);

  }


  addCEStudent(data: any) {
    return this.http.post(this.url20, data);
  }
  viewCEStudent() {
    return this.http.get(this.url22);
  }
  updateCEStudent(value: any) {
    return this.http.post(this.url23, value);
  }
  deleteCEStudent(data: any) {
    return this.http.post(this.url24, data);
  }

  loginservice1CE(data2: any) {
    return this.http.post(this.url21, data2);
  }

  public loginUserFromRemoteCE(user: UserComponent): Observable<object> {
    console.log(user);
    return this.http.post(this.url21, user);

  }



  addMEFaculties(data: any) {
    return this.http.post(this.url8, data);
  }
  viewMEFaculties() {
    return this.http.get(this.url10);
  }
  updateMEFaculties(value: any) {
    return this.http.post(this.url13, value);
  }
  deleteMEFaculties(data: any) {
    return this.http.post(this.url14, data);
  }

  loginservice3(data4: any) {
    return this.http.post(this.url9, data4);
  }

  public loginFacultyFromRemote(faculty: UserComponent): Observable<object> {
    console.log(faculty);
    return this.http.post(this.url9, faculty);

  }

  addEEFaculties(data: any) {
    return this.http.post(this.url25, data);
  }
  viewEEFaculties() {
    return this.http.get(this.url27);
  }
  updateEEFaculties(value: any) {
    return this.http.post(this.url28, value);
  }
  deleteEEFaculties(data: any) {
    return this.http.post(this.url29, data);
  }

  loginservice3EE(data4: any) {
    return this.http.post(this.url26, data4);
  }

  public loginFacultyFromRemoteEE(faculty: UserComponent): Observable<object> {
    console.log(faculty);
    return this.http.post(this.url26, faculty);

  }


  addCEFaculties(data: any) {
    return this.http.post(this.url30, data);
  }
  viewCEFaculties() {
    return this.http.get(this.url32);
  }
  updateCEFaculties(value: any) {
    return this.http.post(this.url33, value);
  }
  deleteCEFaculties(data: any) {
    return this.http.post(this.url34, data);
  }

  loginservice3CE(data4: any) {
    return this.http.post(this.url31, data4);
  }

  public loginFacultyFromRemoteCE(faculty: UserComponent): Observable<object> {
    console.log(faculty);
    return this.http.post(this.url31, faculty);

  }

  addStaff(data: any) {
    return this.http.post(this.url35, data);
  }
  viewStaff() {
    return this.http.get(this.url37);
  }
  updateStaff(value: any) {
    return this.http.post(this.url38, value);
  }
  deleteStaff(data: any) {
    return this.http.post(this.url39, data);
  }

  loginservice3Staff(data4: any) {
    return this.http.post(this.url36, data4);
  }

  public loginFacultyFromRemoteStaff(faculty: UserComponent): Observable<object> {
    console.log(faculty);
    return this.http.post(this.url36, faculty);
  }


  addBranch(data: any) {
    return this.http.post(this.url40, data);
  }
  viewBranch() {
    return this.http.get(this.url41);
  }
  deleteBranch(data: any) {
    return this.http.post(this.url42, data);
  }


  addNotify(data: any) {
    return this.http.post(this.url43, data);
  }
  viewNotify() {
    return this.http.get(this.url44);
  }
  deleteNotify(data: any) {
    return this.http.post(this.url45, data);
  }


  addMEMarksheet(data: any) {
    return this.http.post(this.url46, data);
  }
  viewMEMarksheet() {
    return this.http.get(this.url47);
  }
  updateMEMarksheet(value: any) {
    return this.http.post(this.url49, value);
  }
  deleteMEMarksheet(data: any) {
    return this.http.post(this.url48, data);
  }

  addFees(data: any) {
    return this.http.post(this.url50, data);
  }
  viewFees() {
    return this.http.get(this.url51);
  }
}
