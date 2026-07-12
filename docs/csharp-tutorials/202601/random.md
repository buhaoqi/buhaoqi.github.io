

### Switch随机生成宠物：

```csharp
Random r = new Random();
int pet = r.Next(1,4);

switch(pet)
{
    case 1:
        Console.WriteLine("你的宠物是小猫");
        Console.WriteLine(" /\\_/\\ ");
        Console.WriteLine("( o.o )");
        Console.WriteLine(" > ^ < ");
        break;

    case 2:
        Console.WriteLine("你的宠物是小狗");
        Console.WriteLine(" / \\__ ");
        break;

    case 3:
        Console.WriteLine("你的宠物是小猪");
        Console.WriteLine(" ^-----^ ");
        break;
}
```
