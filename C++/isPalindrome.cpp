#include <string>
#include <cctype>

bool isPalindrom(const std::string &str)
{
    std::string lowerCaseStr;
    for (char c : str)
    {
        if (std::isalnum(c))
        {
            lowerCaseStr += std::tolower(c);
        }
    }

    std::string reversed = lowerCaseStr;
    std::reverse(reversed.begin(), reversed.end());

    return lowerCaseStr == reversed;
}