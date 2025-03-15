# Week 3 Inventory Management API

## Overview
This API provides endpoints for managing warehouses, products, and notifications related to inventory management.

## Warehouse Routes

### Update Product in Warehouse
**PUT** `/warehouses/:warehouseId/products/:productid`
![image](https://github.com/user-attachments/assets/395d21c0-ffc5-44db-8c95-b2fdb66235b4)

- **Description**: Updates a specific product in a given warehouse.
- **Path Parameters**:
  - `warehouseId` (string) - Unique identifier for the warehouse.
  - `productid` (string) - Unique identifier for the product.
- **Request Body** (example):
  ```json
  {
    "quantity": 100,
    "status": "in stock"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Product updated successfully",
    "product": { "id": "12345", "quantity": 100, "status": "in stock" }
  }
  ```

---

## Product Routes

### Retrieve All Products
**GET** `/products`
![image](https://github.com/user-attachments/assets/941f9e12-700e-4e72-a66e-bc6dcd84264f)

- **Description**: Fetches all available products.
- **Response**:
  ```json
  [
    { "id": "12345", "name": "Product A", "price": 50.0 },
    { "id": "67890", "name": "Product B", "price": 75.0 }
  ]
  ```

### Add a New Product
**POST** `/products`
![image](https://github.com/user-attachments/assets/e379e7fa-f5c7-4242-8ca4-d6fa8c0140f4)

- **Description**: Adds a new product to the inventory.
- **Request Body** (example):
  ```json
  {
    "name": "Product C",
    "price": 100.0,
    "stock": 30
  }
  ```
- **Response**:
  ```json
  {
    "message": "Product added successfully",
    "product": { "id": "99999", "name": "Product C", "price": 100.0, "stock": 30 }
  }
  ```

### Update Product Details
**PUT** `/products/:id`
![image](https://github.com/user-attachments/assets/15254f2a-1b63-4953-83a6-e64097e22f78)

- **Description**: Updates product details.
- **Path Parameters**:
  - `id` (string) - Unique identifier for the product.
- **Request Body** (example):
  ```json
  {
    "price": 120.0,
    "stock": 25
  }
  ```
- **Response**:
  ```json
  {
    "message": "Product updated successfully",
    "product": { "id": "99999", "price": 120.0, "stock": 25 }
  }
  ```

### Delete a Product
**DELETE** `/products/:id`
![image](https://github.com/user-attachments/assets/ec4ec09d-9808-4dbf-87f6-73ae8e6bfb81)

- **Description**: Removes a product from the inventory.
- **Path Parameters**:
  - `id` (string) - Unique identifier for the product.
- **Response**:
  ```json
  {
    "message": "Product deleted successfully"
  }
  ```

---

## Notification Routes

### Retrieve All Products
**GET** `/api/v1/products`
![image](https://github.com/user-attachments/assets/3f3f62cb-3d7f-4121-8c33-05cdbf2ad5c6)

- **Description**: Fetches all products with inventory status.
- **Response**:
  ```json
  [
    { "id": "12345", "name": "Product A", "stock": 50 },
    { "id": "67890", "name": "Product B", "stock": 20 }
  ]
  ```

### Retrieve Low Stock Products
**GET** `/api/v1/products?lowStock=true`
![image](https://github.com/user-attachments/assets/2c79782c-9b21-457f-8526-42109f5d4029)

- **Description**: Fetches products that are running low on stock.
- **Response**:
  ```json
  [
    { "id": "67890", "name": "Product B", "stock": 5 }
  ]
  ```

### Retrieve Reorder Notifications
**GET** `/api/v1/notifications/reorders`
![image](https://github.com/user-attachments/assets/b0f1a583-9956-45b4-b85d-f07d40bbc39d)

- **Description**: Fetches notifications for products that need reordering.
- **Response**:
  ```json
  [
    { "productId": "67890", "name": "Product B", "reorderLevel": 10 }
  ]
  ```


