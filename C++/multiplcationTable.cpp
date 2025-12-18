#include <string>

std::string multi_table(int number)
{
    std::string result;
    for (int i = 1; i <= 10; i++)
    {
        if (i > 1)
            result += "\n";
        result += std::to_string(i) + " * " + std::to_string(number) + " = " + std::to_string(number * i);
    }
    return result;
}