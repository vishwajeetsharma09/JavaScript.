#include <iostream>
using namespace std;
int main()
{
    int n;
    cin >> n;
    int first_number = 0;
    int second_number = 1;
    for (int i = 3; i <= n; i++)
    {
        if (i == 1)
        {
            cout << first_number << " ";
        }
        if (i == 2)
        {
            cout << second_number << " ";
        }
        int curr = first_number + second_number;
        first_number = second_number;
        second_number = curr;

        cout << curr << " ";
    }

    return 0;
}