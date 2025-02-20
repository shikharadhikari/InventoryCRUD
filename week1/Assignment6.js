// Starter Data
const userData = [
    { id: 1, name: "Alice", active: true },
    { id: 2, name: "Bob", active: false },
    { id: 3, name: "Charlie", active: true },
    { id: 4, name: "David", active: false },
    { id: 5, name: "Eva", active: true },
    { id: 6, name: "Frank", active: true },
    { id: 7, name: "Grace", active: false },
    { id: 8, name: "Hannah", active: true },
    { id: 9, name: "Ian", active: false },
    { id: 10, name: "Jane", active: true }
  ];
  
  // 1. Simulate fetching user data asynchronously
  function fetchUserData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(userData); // Resolves after 2 seconds
      }, 2000);
    });
  }
  
  async function processUserData() {
    try {
      const users = await fetchUserData();
  
      // Process the data
      const totalUsers = users.length;
      const activeUsers = users.filter(user => user.active).length;
  
      // Log the summary
      console.log(`Total users: ${totalUsers}, Active users: ${activeUsers}`);
    } catch (error) {
      console.error("Error processing data:", error);
    }
  }
  
  // Example usage
  processUserData();
  