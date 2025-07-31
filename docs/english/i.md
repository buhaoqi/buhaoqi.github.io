---
noteId: "108c6b40686c11f0b38abb3f8df447a5"
tags: []

---

### 9. **Interface** [ˈɪntəfeɪs]  
**中文**：接口  
**短语**：  
- API interface (API接口)  
- Implement an interface (实现接口)  
**场景**：  
```typescript
// Define interface
interface PaymentGateway {
  processPayment(amount: number): boolean;
}

// Implement interface
class PayPal implements PaymentGateway {
  processPayment(amount: number) {
    // Payment logic
    return true;
  }
}
```