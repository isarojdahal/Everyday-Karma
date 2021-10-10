#include <iostream>

using namespace std;

void add(int a, int b)
{

    cout << "add integer : " << (a + b);
}

void add(float a, float b)
{
    cout << "add float : " << (a + b);
}

void add(double a, double b)
{

    cout << "add double : " << (a + b);
}

int main()
{
    double a = 10.0, b = 12.3;
    add(1, 2);
    add(1.2, 2.3);
    add(a, b);
}
