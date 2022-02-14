const ctx = document.getElementById('myChart').getContext('2d')
const votes = document.getElementById('myVotes').getContext('2d')
const myChart = new Chart(ctx, {
   type: 'polarArea',
   data: {
      labels: ['Youtube', 'Facebook', 'Instagram'],
      datasets: [
         {
            label: 'Count of Votes',
            data: [12, 19, 5],
            backgroundColor: [
               'rgba(255, 99, 132, 1)',
               'rgba(54, 162, 235, 1)',
               'rgba(153, 102, 255, 1)'
            ],

            borderWidth: 1
         }
      ]
   },
   options: {
      scales: {
         responsive: true
      }
   }
})

const myVotes = new Chart(votes, {
   type: 'bar',
   data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
         {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
               'rgba(255, 99, 132, 0.6)',
               'rgba(54, 162, 235, 0.6)',
               'rgba(255, 206, 86, 0.6)',
               'rgba(75, 192, 192, 0.6)',
               'rgba(153, 102, 255, 0.6)',
               'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: [
               'rgba(255, 99, 132, 1)',
               'rgba(54, 162, 235, 1)',
               'rgba(255, 206, 86, 1)',
               'rgba(75, 192, 192, 1)',
               'rgba(153, 102, 255, 1)',
               'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
         }
      ]
   },
   options: {
      scales: {
         responsive: true
      }
   }
})
