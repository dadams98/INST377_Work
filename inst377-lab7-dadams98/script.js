const searchForm = document.getElementById('search-form');
const loadingText = document.querySelector('.loading-text');
const bookTable = document.querySelector('.book-table');
const bookTableBody = document.getElementById('book-table-body');

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const bookInput = document.getElementById('book-input');
  const bookName = bookInput.value.trim().replace(/\s/g, '+');

  if (bookName) {
    loadingText.style.display = 'block';
    bookTable.style.display = 'none';

    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${bookName}`);
      const data = await response.json();

      loadingText.style.display = 'none';
      bookTableBody.innerHTML = '';

      data.docs.forEach(book => {
        const row = document.createElement('tr');
        const titleCell = document.createElement('td');
        const authorCell = document.createElement('td');

        titleCell.textContent = book.title;
        authorCell.textContent = book.author_name?.join(', ') || 'Unknown';

        row.appendChild(titleCell);
        row.appendChild(authorCell);
        bookTableBody.appendChild(row);
      });

      bookTable.style.display = 'table';
    } catch (error) {
      console.error('Error fetching book data:', error);
      loadingText.style.display = 'none';
      alert('An error occurred while fetching book data. Please try again later.');
    }
  }
});
