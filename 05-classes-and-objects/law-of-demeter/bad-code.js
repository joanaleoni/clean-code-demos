class DeliveryJob {
  customer: any;
  warehouse: any;

  constructor(customer, warehouse) {
    this.customer = customer;
    this.warehouse = warehouse;
  }

  deliverLastPurchase() {
    const date = this.customer.lastPurchase.date;
    this.warehouse.deliverPurchasesByDate(this.customer, date);
  }
}
