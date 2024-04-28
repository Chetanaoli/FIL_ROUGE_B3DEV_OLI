import { Component, EventEmitter, Output, inject } from '@angular/core';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
declare var handleSignout: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  searchTerm: string = '';
  searchedLocation: any = undefined;
  isSidebarOpen = false;
  @Output() searchClicked = new EventEmitter<string>();
  locationData: any[] = [];
  historyData: any[] = [];
  currentLoc: any;
  courselitems = [1, 2, 3, 4, 5];
  courselIndex = 0;
  loggedInUser: any; // You might want to create an interface for better typing
  visibleItems: any[] = []; // Array to hold currently visible items
  itemsPerPage = 5; // Number of items to display per page
  currentIndex = 0; // Index of the first visible item

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  constructor(private homeService: HomeService, private router: Router) { }
  auth = inject(AuthService);
  search(): void {
    this.homeService.updateSearchTerm(this.searchTerm);
    console.log('Search term sdasds:', this.searchTerm);
  }

  handleCurrentLocData(data: any): void {
    this.currentLoc = data;
    console.log('Current Loc Details', this.currentLoc);
  }

  handleUpdateMapData(data: any): void {
    // Handle the received data in your home component
    console.log('this data is ', data);
    this.searchedLocation = data;
    this.locationData.push(data);
    this.fetchWeatherHistory();

    console.log('Received data from map component:', this.locationData);

    // Limit the array to 3 items
  }

  ngOnInit() {
    this.retrieveLoggedInUser();
    this.fetchWeatherHistory();
    // this.updateVisibleItems();
  }
  updateVisibleItems(): void {
    this.visibleItems = this.historyData.slice(
      this.currentIndex,
      this.currentIndex + this.itemsPerPage
    );
    console.log('Visible items:', this.visibleItems);
  }

  private retrieveLoggedInUser(): void {
    // Retrieve user details from sessionStorage
    const storedUser = sessionStorage.getItem('loggedInUser');

    // Parse the stored user JSON string
    this.loggedInUser = storedUser ? JSON.parse(storedUser) : null;
  }

  private fetchWeatherHistory(): void {
    this.homeService.getWeatherHistory().subscribe(
      (response) => {
        // Check if the 'data' property exists
        if (response.weather && response.weather.length > 0) {
          // Extract and store location data
          this.historyData = response.weather.map((entry: any) => [
            entry.location,
            entry.current,
          ]);
          console.log('Location Data:', this.historyData);
          this.updateVisibleItems();
        } else {
          console.log('No weather data found');
        }
      },
      (error) => {
        console.error('Error fetching weather history:', error);
        this.router.navigate(['/login']);

        // Handle errors as needed
      }
    );
  }

  moveSlide(direction: 'prev' | 'next'): void {
    if (direction === 'prev' && this.hasPreviousItem()) {
      this.currentIndex--;
    } else if (direction === 'next' && this.hasNextItem()) {
      this.currentIndex++;
    }
    this.updateVisibleItems();
  }

  hasPreviousItem(): boolean {
    return this.currentIndex > 0;
  }

  hasNextItem(): boolean {
    return this.currentIndex + this.itemsPerPage < this.historyData.length;
  }

  redirectToHome() {
    this.router.navigate(['/home']);
  }
  redirectToDashboard() {
    this.router.navigate(['/dashboard']);
  }
  logout() {
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('termsCondition');
    // Redirect to login page or any other page as needed
    this.router.navigate(['/login']);
  }
  handleSignout() {
    this.auth.handleSignout();
    sessionStorage.removeItem('loggedInUser');

    sessionStorage.removeItem('userLocation');
    sessionStorage.setItem('isReloaded', 'flase');
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
