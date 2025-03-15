# Week 3 Inventory Management API

## Overview
This API provides endpoints for managing warehouses, products, and notifications related to inventory management.

## Warehouse Routes

### Update Product in Warehouse
**PUT** `/warehouses/:warehouseId/products/:productid`
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
- **Description**: Fetches products that are running low on stock.
- **Response**:
  ```json
  [
    { "id": "67890", "name": "Product B", "stock": 5 }
  ]
  ```

### Retrieve Reorder Notifications
**GET** `/api/v1/notifications/reorders`
- **Description**: Fetches notifications for products that need reordering.
- **Response**:
  ```json
  [
    { "productId": "67890", "name": "Product B", "reorderLevel": 10 }
  ]
  ```


