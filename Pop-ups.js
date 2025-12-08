document.addEventListener('DOMContentLoaded', () => {
    const segment1cc1 = document.querySelector('.containercontent1');
    const segment1bg = document.querySelector('.Segment1-bg');
    const segment1Nav = document.querySelector('.Nav');
    const segment2FC = document.querySelector('.FC');
    const segment3T = document.querySelector('.Segment3Title');
    const segment3CF = document.querySelector('.cardframe');
    const homepage = document.querySelector('.Homepage');

    function hidePopLayoutOnly(popLayout) {
        popLayout.style.visibility = "hidden";
        popLayout.style.opacity = "0";
    }    

    function showPopLayout(popLayout) {
        console.log("ShowPopLayout called");

        // Apply blur to all segments
        [segment1cc1, segment1bg, segment1Nav, homepage, segment2FC, segment3T, segment3CF].forEach(element => {
            if (element) {
                element.style.filter = "blur(3px)";
                element.style.transition = "filter 0.5s";
            }
        });

        const DisableEnableFeatures = document.querySelectorAll('.Homepage, .containercontent1, .Nav, .main-image, .FC_Quotes,.blockcard, .benefits, .blockname');
        DisableEnableFeatures.forEach(FC => {
            FC.style.pointerEvents = "none";
        });

        // Show popup
        popLayout.style.visibility = "visible";
        popLayout.style.opacity = "1";
        popLayout.style.pointerEvents = "auto"; // Enable interactions with popup
    }

    function hidePopLayout(popLayout) {
        console.log("HidePopLayout called");
        
        // Remove blur from all segments
        [segment1cc1, segment1bg, segment1Nav, homepage, segment2FC, segment3T, segment3CF].forEach(element => {
            if (element) {
                element.style.filter = "none";
            }
        });

        const DisableEnableFeatures = document.querySelectorAll('.Homepage, .containercontent1, .Nav, .main-image, .FC_Quotes, .blockcard, .benefits, .blockname');
        DisableEnableFeatures.forEach(FC => {
            FC.style.pointerEvents = "auto";
        });

        // Hide popups
        const allPopLayouts = Array.from({length: 20}, (_, i) => 
            document.getElementById(`PopLayout${i + 1}`)
        );
        
        allPopLayouts.forEach(layout => {
            if (layout) {
                layout.style.visibility = "hidden";
                layout.style.opacity = "0";
            }
        });
    }

    function hideAllPopLayoutsExcept(activePopLayout) {
        // Create array of all PopLayouts
        const allPopLayouts = Array.from({length: 20}, (_, i) => 
            document.getElementById(`PopLayout${i + 1}`)
        );
        
        // First hide all PopLayouts
        allPopLayouts.forEach(popLayout => {
            if (popLayout && popLayout !== activePopLayout) {
                hidePopLayoutOnly(popLayout);
            }
        });
        
        // Then show only the active PopLayout
        showPopLayout(activePopLayout);
    }

    // Button and pop-up layouts
    const popButtons = Array.from({length: 20}, (_, i) => 
        document.getElementById(`Popbtn${i + 1}`)
    );

    const popLayouts = Array.from({length: 20}, (_, i) => 
        document.getElementById(`PopLayout${i + 1}`)
    );

    // Define the correct class names in an array
    const classNames = [
        "Carlo_Aguila2",
        "Amir_Alexander2",
        "Salvador_Cebreros2",
        "Bruce_Hsu2",
        "Michael_Lofchie2",
        "Bryan_Ly2",
        "Mustafa_Siddiqui2",
        "Junjie_Ye2",
        "Abbas_Siddiqui2",
        "James_Mustamandi2",
        "John_Branstetter2",
        "Abril_Antonini2",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
    ];

    // Optimize pointer/touch events
    const handlePointerEvent = (e) => {
        const card = e.currentTarget;
        const index = Array.from(classNames).findIndex(name => 
            card.classList.contains(name)
        );
        if (index !== -1) {
            const popLayout = document.getElementById(`PopLayout${index + 1}`);
            hideAllPopLayoutsExcept(popLayout);
        }
    };

    // Replace your existing for loop with this optimized version
    for (let i = 0; i < classNames.length; i++) {
        const blockcard = document.getElementsByClassName(classNames[i]);
        Array.from(blockcard).forEach((card) => {
            // Add pointer events instead of click
            card.style.touchAction = 'manipulation'; // Optimize touch behavior
            card.addEventListener('pointerdown', handlePointerEvent, { passive: true });
        });
    }

    // Optimize button handlers
    const optimizedButtonHandler = (e) => {
        const btn = e.currentTarget;
        const index = parseInt(btn.id.replace('Popbtn', '')) - 1;
        hidePopLayout(popLayouts[index]);
    };

    // Update button event listeners
    popButtons.forEach((btn) => {
        if (btn) {
            btn.style.touchAction = 'manipulation';
            btn.addEventListener('pointerdown', optimizedButtonHandler, { passive: true });
        }
    });
});

