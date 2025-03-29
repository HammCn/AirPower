## 📖 事件

我们为 `AirPower` 内置了一个 `Event` 事件处理类：

```typescript
import airEvent from './event/AirEvent'

airEvent.on() // 监听事件
airEvent.off() // 取消监听事件
airEvent.once() // 监听一次事件
airEvent.emit() // 触发事件
airEvent.onAll() // 监听多个事件
```

你可以自行封装一个 `string` 枚举作为事件选项，这样你的魔法值就不会太多了。
