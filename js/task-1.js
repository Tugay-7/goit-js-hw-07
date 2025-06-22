const categories = document.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach((element) => {
    const categoryName = element.querySelector('h2')?.textContent || 'Unknown';
    const numberOfElements = element.querySelectorAll('ul li').length;

    console.log(`category: ${categoryName}`);
    console.log(`Elements: ${numberOfElements}`);
});