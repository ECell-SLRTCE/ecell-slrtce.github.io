#include<bits/stdc++.h>
using namespace std;

void prime_sieve(int *p){
  for(long long int i=0;i<=100000;i++){
    p[i]=1;
  }
  
  for(long long int i=2;i<=100000;i+=1){
    if(p[i]==1){
      for(long long int j=i*i;j<=100000;j+=i){
        p[j]=0;
    }
    }
  }
  p[1]=p[0]=0;
}

 int main(){
     #ifndef ONLINE_JUDGE
    freopen("input.txt","r",stdin);
    freopen("output.txt","w",stdout);
    #endif
   int p[100005]={0};
   prime_sieve(p);
   int cumsum[100005]={0};

  for(int i=1;i<100000;i++){
    cumsum[i]=cumsum[i-1]+p[i];
  }
  int q;
  cin>>q;
  while(q--){
    int a,b;
    cin>>a>>b;

    cout<<cumsum[b]-cumsum[a-1]<<endl;
  }
   return 0;
 }