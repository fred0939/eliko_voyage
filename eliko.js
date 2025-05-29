 // Header scroll effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Button hover effects
        const buttons = document.querySelectorAll('.btn2');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'translateY(-5px)';
                button.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translateY(0)';
                button.style.boxShadow = 'none';
            });
        });

        // Search functionality
        const searchForm = document.querySelector('.search-bar');
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const searchTerm = document.getElementById('search-input').value;
            alert(`Recherche pour: ${searchTerm}\nCette fonctionnalité sera implémentée prochainement!`);
        });

        // Learn more button
        document.getElementById('learn-more-btn').addEventListener('click', () => {
            alert('Découvrez nos services exceptionnels et nos offres exclusives!');
        });

        // Book now button
        document.getElementById('book-now-btn').addEventListener('click', () => {
            alert('Redirection vers notre système de réservation...');
        });

        // Contact form
        document.getElementById('contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Merci pour votre message! Nous vous contacterons bientôt.');
            e.target.reset();
        });

        // Load destinations dynamically
        const destinations = [
            {
                title: "Abidjan, côte d'Ivoire",
                image: "images/plateau-abidjan-826x1024.jpeg",
                description: "La ville a mille talent ,là où ivoirien donne corrière, découvrez la ville la plus ambiancé de la terre.",
                price: "À partir de 359.400fcfa"
            },
            {
                title: "Paris, France",
                image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                description: "La ville de l'amour et des lumières, découvrez la Tour Eiffel, le Louvre et la cuisine française.",
                price: "À partir de 399.400fcfa"
            },
            {
                title: "le caire, Egypte",
                image: "images/33941-que-faire-au-caire-en-egypte.jpg",
                description: "Explorez les pyramides majestueuses et la riche histoire de l'Égypte ancienne dans la capitale égyptienne.",
                price: "À partir de 299.400fcfa"
            },
            {
                title: "Tokyo, Japon",
                image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                description: "Mélange unique de tradition et de modernité, explorez les temples anciens et la technologie futuriste.",
                price: "À partir de 479.400fcfa"
            },
            {
                title: "New York, USA",
                image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                description: "La ville qui ne dort jamais, découvrez Times Square, Central Park et la Statue de la Liberté.",
                price: "À partir de 419.400fcfa"
            },
            {
                title: "Bali, Indonésie",
                image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                description: "Paradis tropical avec des plages de sable blanc, des rizières en terrasses et une culture riche.",
                price: "À partir de 399.400fcfa"
            }
        ];

        const destinationsGrid = document.querySelector('.destinations-grid');
        destinations.forEach(dest => {
            const card = document.createElement('div');
            card.className = 'destination-card';
            card.innerHTML = `
                <div style="background-image: url('${dest.image}'); height: 200px; background-size: cover; background-position: center; border-radius: 10px 10px 0 0;"></div>
                <div style="padding: 20px; background: white; border-radius: 0 0 10px 10px;">
                    <h3 style="margin-bottom: 10px; color: var(--secondary-color);">${dest.title}</h3>
                    <p style="margin-bottom: 15px; color: var(--text-color);">${dest.description}</p>
                    <p style="font-weight: bold; color: var(--primary-color);">${dest.price}</p>
                    <button style="margin-top: 15px; padding: 8px 20px; background-color: var(--accent-color); border: none; border-radius: 5px; cursor: pointer; transition: all 0.3s ease;">Découvrir</button>
                </div>
            `;
            card.style.borderRadius = '10px';
            card.style.overflow = 'hidden';
            card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            card.style.transition = 'all 0.3s ease';
            
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px)';
                card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            });
            
            destinationsGrid.appendChild(card);
        });

        // Load offers dynamically
        const offers = [
            {
                title: "Séjour Romantique",
                description: "Forfait tout compris pour 2 personnes avec spa et dîner aux chandelles",
                discount: "-30%"
            },
            {
                title: "Aventure en Famille",
                description: "Réduction spéciale pour les familles de 4 personnes ou plus",
                discount: "-25%"
            },
            {
                title: "Last Minute",
                description: "Dernières minutes pour des destinations ensoleillées",
                discount: "-40%"
            }
        ];

        const offersContainer = document.querySelector('.offers-container');
        offers.forEach(offer => {
            const offerCard = document.createElement('div');
            offerCard.className = 'offer-card';
            offerCard.innerHTML = `
                <div style="padding: 30px; background: white; border-radius: 10px; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); text-align: center; max-width: 300px;">
                    <div style="font-size: 2rem; color: var(--accent-color); font-weight: bold; margin-bottom: 15px;">${offer.discount}</div>
                    <h3 style="margin-bottom: 15px; color: var(--secondary-color);">${offer.title}</h3>
                    <p style="margin-bottom: 20px; color: var(--text-color);">${offer.description}</p>
                    <button style="padding: 10px 25px; background-color: var(--primary-color); color: white; border: none; border-radius: 5px; cursor: pointer; transition: all 0.3s ease;">Profiter</button>
                </div>
            `;
            offerCard.style.transition = 'all 0.3s ease';
            
            offerCard.addEventListener('mouseenter', () => {
                offerCard.style.transform = 'scale(1.05)';
            });
            
            offerCard.addEventListener('mouseleave', () => {
                offerCard.style.transform = 'scale(1)';
            });
            
            offersContainer.appendChild(offerCard);
        });

        // Animation on scroll
        const animateOnScroll = () => {
            const sections = document.querySelectorAll('.section');
            
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (sectionTop < windowHeight - 100) {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }
            });
        };

        // Set initial state for animation
        document.querySelectorAll('.section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
            section.style.transition = 'all 0.8s ease';
        });

        window.addEventListener('scroll', animateOnScroll);
        animateOnScroll(); // Run once on load