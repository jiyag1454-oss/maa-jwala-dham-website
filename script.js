document.addEventListener('DOMContentLoaded', () => {

    /* ---------------- EVENTS ---------------- */
    const eventCards = document.querySelectorAll('.event-box');
    const eventsContainer = document.querySelector('.events-grid');

    if(eventCards.length && eventsContainer) {
        // Sort events by date
        const sortedEvents = Array.from(eventCards).sort((a, b) => {
            return new Date(a.dataset.date) - new Date(b.dataset.date);
        });
        sortedEvents.forEach(card => eventsContainer.appendChild(card));

        // Fade-in animation
        sortedEvents.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('show');
            }, index * 150);
        });

        // Optional: Event filter if you added a dropdown
        const filterSelect = document.getElementById('filter');
        if(filterSelect) {
            filterSelect.addEventListener('change', () => {
                const value = filterSelect.value;
                sortedEvents.forEach(card => {
                    if(value === 'all' || card.dataset.type === value) {
                        card.style.display = 'block';
                        setTimeout(() => card.classList.add('show'), 50);
                    } else {
                        card.classList.remove('show');
                        setTimeout(() => card.style.display = 'none', 300);
                    }
                });
            });
        }
    }
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

    /* ---------------- SERVICES ---------------- */
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('show');
        }, index * 150);
    });

    /* ---------------- TEMPLE CARDS ---------------- */
    const templeCards = document.querySelectorAll('.temple-card');
    templeCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('show');
        }, index * 150);
    });

    /* ---------------- FADE-IN SECTIONS ---------------- */
    const fadeSections = document.querySelectorAll('.fade-in');
    fadeSections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('show');
        }, index * 150);
    });

    /* ---------------- MOBILE MENU TOGGLE ---------------- */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const eventsContainer = document.querySelector('.events-grid');
    const eventBoxes = Array.from(document.querySelectorAll('.event-box'));

    // Sort events by date
    const sortedEvents = eventBoxes.sort((a, b) => {
        const dateA = a.querySelector('.event-date .date').textContent;
        const monthA = a.querySelector('.event-date .month').textContent;
        const dateB = b.querySelector('.event-date .date').textContent;
        const monthB = b.querySelector('.event-date .month').textContent;

        // Convert month names to numbers
        const monthMap = {
            'जनवरी': 0, 'फरवरी': 1, 'मार्च': 2, 'अप्रैल': 3, 'मई': 4,
            'जून': 5, 'जुलाई': 6, 'अगस्त': 7, 'सितंबर': 8, 'अक्टूबर': 9,
            'नवंबर': 10, 'दिसंबर': 11
        };

        const fullDateA = new Date(2025, monthMap[monthA], parseInt(dateA));
        const fullDateB = new Date(2025, monthMap[monthB], parseInt(dateB));

        return fullDateA - fullDateB;
    });

    // Append sorted events
    sortedEvents.forEach(box => eventsContainer.appendChild(box));

    // Fade-in animation
    sortedEvents.forEach((box, index) => {
        setTimeout(() => {
            box.classList.add('show');
        }, index * 150);
    });
});
const filterSelect = document.getElementById('event-filter');

filterSelect.addEventListener('change', () => {
    const selectedType = filterSelect.value;

    sortedEvents.forEach(box => {
        if (selectedType === 'all' || box.dataset.type === selectedType) {
            box.style.display = 'block';
            setTimeout(() => box.classList.add('show'), 50);
        } else {
            box.classList.remove('show');
            setTimeout(() => box.style.display = 'none', 300);
        }
    });
});
