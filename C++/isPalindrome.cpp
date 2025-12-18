#include <string>

bool isPalindrom(const std::string &str)
{

    // Specify the starting and edning indexes // Init two pointers
    size_t left = 0;
    size_t right = str.size() - 1;

    // Till the left is less than right // using std and tolower method, compare using str[index element value access]
    while (left < right)
    {
        if (std::tolower(str[left]) != std::tolower(str[right]))
        {
            return false;
        }
        left++;
        right--;
    }
    return true;
}