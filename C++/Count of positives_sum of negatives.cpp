#include <vector>

std::vector<int> countPositivesSumNegatives(std::vector<int> input)
{
    int positives = 0, negatives = 0;
    if (input.size() == 0)
    {
        return {};
    }
    for (size_t i = 0; i < input.size(); i++)
    {
        if (input[i] > 0)
        {
            positives += 1;
        }
        else if (input[i] < 0)
        {
            negatives += input[i];
        }
    }
    return {positives, negatives};
}