function saveFormatData() {

    // Retrieve form values
    const FirstName = document.getElementById('customerName').value.trim();
    const LastName = document.getElementById('customerPhone').value.trim();
    const Address = document.getElementById('check-in').value.trim();
    const PhoneNumber = document.getElementById('check-out').value.trim();
    const Email = document.getElementById('check-out').value.trim();
    const SpecialRequests = document.getElementById('check-out').value.trim();
    const hotels = document.getElementById('customerName').value.trim();
    const checkInDate = document.getElementById('customerName').value.trim();
    const checkOutDate = document.getElementById('customerName').value.trim();


    // validate room numbers
    const numberOfSingleRooms = parseInt(document.getElementById('numberOfSingleRooms').value) || 0;
    const numberOfDoubleRooms = parseInt(document.getElementById('numberOfDoubleRooms').value) || 0;
    const numberOfTripleRooms = parseInt(document.getElementById('numberOfTripleRooms').value) || 0;

    //define room cost
    const singleRoomCost = 25000.00;
    const doubleRoomCost = 35000.00;
    const tripleRoomCost = 40000.00;
    const extraBedCost = 8000.00;

    //calculate room cost
    const singleRoomTotal = numberOfSingleRooms * singleRoomCost;
    const doubleRoomTotal = numberOfDoubleRooms * doubleRoomCost;
    const tripleRoomTotal = numberOfTripleRooms * tripleRoomCost;


    // Calculate total cost
    const totalCost = singleRoomTotal + doubleRoomTotal + tripleRoomTotal;

    // Validate extra 
    const ExtraAmenitiesCheckboxes = document.querySelectorAll('input[name="ExtraAmenities"]:checked');
    const ExtraAmenities = Array.from(ExtraAmenitiesCheckboxes, checkbox => checkbox.value);

    // Validate required fields
    if (!FirstName || !LastName || !PhoneNumber || !checkInDate || !checkOutDate) {
        alert('Please fill in all required fields.');
        return; // Stop further execution
    }


    // Validate at least one room type is selected
    const roomTypeCheckboxes = document.querySelectorAll('input[name="roomType"]:checked');
    if (roomTypeCheckboxes.length === 0) {
        alert('Please select at least one type of room.');
        return; // Stop further execution
    }

    // Ensure room type is selected only if corresponding room number is greater than 0
    if (numberOfSingleRooms === 0 && document.getElementById('singleRoom').checked) {
        alert('Please enter the number of Single Rooms.');
        return; // Stop further execution
    }

    if (numberOfDoubleRooms === 0 && document.getElementById('doubleRoom').checked) {
        alert('Please enter the number of Double Rooms.');
        return; // Stop further execution
    }

    if (numberOfTripleRooms === 0 && document.getElementById('tripleRoom').checked) {
        alert('Please enter the number of Triple Rooms.');
        return; // Stop further execution
    }

    // Validate number of adults
    const numberOfAdults = parseInt(document.getElementById('numberOfAdults').value) || 0;
    if (numberOfAdults < 1) {
        alert('Please enter at least one adult.');
        return; // Stop further execution
    }

    // Calculate the number of kids above 5
    const numberOfKidsAbove5 = parseInt(document.getElementById('numberOfKids').value) || 0;

    // Calculate extra bed cost for kids above 5
    const extraBedTotal = document.getElementById('extraBed').checked ? numberOfKidsAbove5 * extraBedCost : 0;

    // Calculate total cost including extras
    const totalCostWithExtras = totalCost + extraMealTotal + extraBedTotal;

    // Retrieve promo code from the form
    const promoCode = document.getElementById('promoCode').value.trim();

    // Save form data to local storage
    const formData = {
        FirstName,
        LastName,
        PhoneNumber,
        checkInDate,
        checkOutDate,
        roomType: Array.from(roomTypeCheckboxes, checkbox => checkbox.value),
        numberOfSingleRooms,
        numberOfDoubleRooms,
        numberOfTripleRooms,
        numberOfAdults,
        numberOfKids: numberOfKidsAbove5,
        extraRequirements,
        promoCode,



        function calculateCurrentBookingCost(formData) {
            let currentBookingCost = 0;

    const singleRoomCostPerDay = 25000;
    const doubleRoomCostPerDay = 35000;
    const tripleRoomCostPerDay = 40000;
    const extraBedCost = 8000;

    // Calculate the number of days between check-in and check-out
    const checkInDate = new Date(formData.checkInDate);
    const checkOutDate = new Date(formData.checkOutDate);
    const numberOfDays = Math.floor((checkOutDate - checkInDate) / (24 * 60 * 60 * 1000));
    // Calculate the cost based on selected room types
    formData.roomType.forEach(roomType => {
        switch (roomType) {
            case 'single':
                currentBookingCost += formData.numberOfSingleRooms * singleRoomCostPerDay * numberOfDays;
                break;
            case 'double':
                currentBookingCost += formData.numberOfDoubleRooms * doubleRoomCostPerDay * numberOfDays;
                break;
            case 'triple':
                currentBookingCost += formData.numberOfTripleRooms * tripleRoomCostPerDay * numberOfDays;
                break;
        }
    });


    // Apply promo code discount
    if (formData.promoCode && typeof formData.promoCode === 'string') {
        if (formData.promoCode.toLowerCase() === 'promo123') {
            currentBookingCost *= 0.95; // 5% discount
        }
    }

    return currentBookingCost;
}
  
  
  
  
  
  
  
  
  
  };