import { technologies } from "./technologies.js";

document.getElementById('search').addEventListener('input', searchTech);

function calculateAge(creationDate) {
    const creation = new Date(creationDate);
    const now = new Date();
    const diff = new Date(now - creation);
    const years = diff.getUTCFullYear() - 1970;
    const months = diff.getUTCMonth();
    const days = diff.getUTCDate() - 1;
    return `${years} years, ${months} months, ${days} days`;
}

function groupTechnologiesByCategory(techList) {
    return techList.reduce((groups, tech) => {
        const category = tech.category;
        if (!groups[category]) {
            groups[category] = [];
        }
        groups[category].push(tech);
        return groups;
    }, {});
}

function sortGroupsByImportance(groups) {
    return Object.entries(groups).sort(([, a], [, b]) => {
        const maxImportanceA = Math.max(...a.map(tech => tech.importance));
        const maxImportanceB = Math.max(...b.map(tech => tech.importance));
        return maxImportanceA - maxImportanceB;
    });
}

function createTechTables() {
    const contentDiv = document.getElementById('content');
    const groupedTechnologies = groupTechnologiesByCategory(technologies);
    const sortedGroups = sortGroupsByImportance(groupedTechnologies);
    contentDiv.innerHTML = '';

    sortedGroups.forEach(([category, techList]) => {
        const categoryHeading = document.createElement('h2');
        categoryHeading.textContent = category;
        contentDiv.appendChild(categoryHeading);

        const table = document.createElement('table');
        table.innerHTML = `
          <thead>
            <tr>
              <th>Technology</th>
              <th>Creation Date</th>
              <th>Age</th>
              <th>Tags</th>
            </tr>
          </thead>
          <tbody>
            ${techList.map(tech => `
              <tr>
                <td>${tech.name}</td>
                <td>${tech.date}</td>
                <td>${calculateAge(tech.date)}</td>
                <td>${[...tech.tags].map(tag => `#${tag}`).join(' ')}</td>
              </tr>
            `).join('')}
          </tbody>
        `;
        contentDiv.appendChild(table);
    });
}

function updateAges() {
    createTechTables();
}

function searchTech() {
    const filter = document.getElementById('search').value.toLowerCase();
    const rows = document.querySelectorAll('#content table tbody tr');
    let visibleCategoryCount = 0;
    let visibleCategory = null;

    rows.forEach(row => {
        const techName = row.cells[0].textContent.toLowerCase();
        if (techName.includes(filter)) {
            row.style.display = '';
            if (!visibleCategory || visibleCategory !== row.closest('table')) {
                visibleCategoryCount++;
                visibleCategory = row.closest('table');
            }
        } else {
            row.style.display = 'none';
        }
    });

    const tables = document.querySelectorAll('#content table');
    tables.forEach(table => {
        const heading = table.previousElementSibling;
        const tbody = table.querySelector('tbody');
        const rows = tbody.querySelectorAll('tr');
        const hasVisibleRows = Array.from(rows).some(row => row.style.display !== 'none');

        if (visibleCategoryCount === 1 && !table.contains(visibleCategory)) {
            heading.style.display = 'none';
            table.style.display = 'none';
        } else {
            heading.style.display = hasVisibleRows ? '' : 'none';
            table.style.display = hasVisibleRows ? '' : 'none';
        }
    });
}

createTechTables();
setInterval(updateAges, 1000 * 60); // Update every minute