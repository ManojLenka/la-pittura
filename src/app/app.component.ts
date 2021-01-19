import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  constructor(private _dialog: MatDialog) {}

  ngOnInit() {}

  openLoginDialog() {
    const dialogRef = this._dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}

// In categories 1. Paintings
//                         2. Handicrafts
//                         3. Sculptures
//           Customization
//                         4. Home decor
//                         5. Epoxy

// Painting
// Image by <a href="https://pixabay.com/users/martina_bulkova-6772107/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3089011">Martina Bulková</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3089011">Pixabay</a>

// Sculpture
// Image by <a href="https://pixabay.com/users/alexis-8870/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=199462">(El Caminante)</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=199462">Pixabay</a>

// Handicraft
// Image by <a href="https://pixabay.com/users/katetsib-1090772/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2937593">katetsib</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2937593">Pixabay</a>

// All
// Image by <a href="https://pixabay.com/users/pexels-2286921/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1838414">Pexels</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1838414">Pixabay</a>
