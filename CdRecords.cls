public with sharing class CdRecords {
   
    @AuraEnabled(cacheable=true)
    public static List<Capital_Design__c> cdRecord(String Value){
      
        return [select id,Name, Value__c from Capital_Design__c 
                    where Value__c=:Value ];
    }
}
