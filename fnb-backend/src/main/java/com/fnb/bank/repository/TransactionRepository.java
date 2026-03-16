package com.fnb.bank.repository;

import com.fnb.bank.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {

    Optional<Transaction> findByReferenceNumber(String referenceNumber);

    boolean existsByReferenceNumber(String referenceNumber);

    @Query("SELECT t FROM Transaction t WHERE t.sourceAccount.id = :accountId OR t.destinationAccount.id = :accountId ORDER BY t.transactionDate DESC")
    List<Transaction> findByAccountId(@Param("accountId") Long accountId);

    /** All PAYMENT transactions sent from or received by any account owned by userId.
     *  Uses LEFT JOIN so NULL source/destination accounts are not filtered out. */
    @Query("""
        SELECT t FROM Transaction t
        LEFT JOIN t.sourceAccount sa
        LEFT JOIN t.destinationAccount da
        WHERE t.transactionType = 'PAYMENT'
          AND (sa.user.id = :userId OR da.user.id = :userId)
        ORDER BY t.transactionDate DESC
        """)
    List<Transaction> findPaymentsByUserId(@Param("userId") Long userId);
}
