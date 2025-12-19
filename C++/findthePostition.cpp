#include <string>

std::string position(char letter)
{
    if (letter >= 'a' && letter <= 'z')
    {
        int position = letter - 'a' + 1;
        return "Position of alphabet: " + std::to_string(position);
    }
    else
    {
        return "-1";
    }
}