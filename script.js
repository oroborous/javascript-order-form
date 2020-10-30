$(document).ready(
    function () {


		/****
		 * ADD EVENT LISTENERS RIGHT HERE
		 *
		 * Use jQuery's .change to listen for text changes in
		 * the two quantity fields.
		 * 
		 * Both fields can use the same updateTotal function.
		 ****/



		function updateTotal() {
			// STEP ONE: Books
			// Get the value of the "qtyBook" input and parse to a number
			// Get the text of the "priceBook" span and parse to a number
			// Calculate the book total
			// Update the text of the "totalBook" span with the book total


			// STEP TWO: Donations
			// Get the value of the "qtyDonation" input and parse to a number
			// Get the text of the "priceDonation" span and parse to a number
			// Calculate the donation total
			// Update the text of the "totalDonation" span with the book total


			// STEP THREE: Grand Total
			// Add the book and donation totals to get the grand total
			// Update the text of the "grandTotal" span with the grand total
		}
    }
);


